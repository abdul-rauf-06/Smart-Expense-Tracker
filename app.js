/* ==========================
   USER LOGIN
========================== */

window.addEventListener("DOMContentLoaded", init);

let expenses = [];

let income = Number(localStorage.getItem("income")) || 0;

let budgetLimit = Number(localStorage.getItem("budgetLimit")) || 0;


/* ==========================
   INIT
========================== */

function init() {
    loadUser();
    loadExpenses();
    showAll();
    updateDashboard();
}


/* ==========================
   USER
========================== */

function loadUser() {
    const user = localStorage.getItem("userName");

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    document.getElementById("username").innerText = user;
}


function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}


/* ==========================
   SECTIONS
========================== */

function showAll() {
    document.querySelectorAll(".section").forEach(sec => {
        sec.classList.remove("hidden");
    });
}


function showSection(id) {
    document.querySelectorAll(".section").forEach(sec => {
        sec.classList.add("hidden");
    });

    document.getElementById(id).classList.remove("hidden");
}


/* ==========================
   EXPENSE
========================== */

function loadExpenses() {
    expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    renderTable();
}


document.getElementById("expenseForm")
    .addEventListener("submit", addExpense);


function addExpense(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const amount = Number(document.getElementById("amount").value);
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;

    expenses.push({
        title,
        amount,
        category,
        date
    });

    localStorage.setItem("expenses", JSON.stringify(expenses));

    document.getElementById("expenseForm").reset();

    renderTable();
    updateDashboard();
    checkLimit();
}


function renderTable() {
    const table = document.getElementById("expenseTable");
    table.innerHTML = "";

    expenses.forEach((item, index) => {
        table.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.title}</td>
                <td>Rs ${item.amount}</td>
                <td>${item.category}</td>
                <td>${item.date}</td>
                <td>
                    <button class="delete" onclick="deleteExpense(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}


/* ==========================
   DELETE
========================== */

function deleteExpense(index) {
    expenses.splice(index, 1);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    renderTable();
    updateDashboard();
}


/* ==========================
   INCOME
========================== */

function updateIncome() {
    const value = Number(document.getElementById("newIncome").value);

    if (!value) {
        alert("Enter income");
        return;
    }

    income = value;

    localStorage.setItem("income", income);

    updateDashboard();
}


/* ==========================
   LIMIT
========================== */
/* ==========================
LIMIT
========================== */

function setLimit() {


const value =
Number(
    document
    .getElementById(
        "budgetLimit"
    )
    .value
);

if (
    value <= 0
) {

    alert(
        "Enter valid limit"
    );

    return;

}


budgetLimit =
value;


localStorage.setItem(

    "budgetLimit",

    budgetLimit

);


checkLimit();


alert(
    "Budget limit saved"
);


}

function checkLimit() {


const total =

expenses.reduce(

    (sum,item)=>

    sum +
    item.amount,

    0

);


const warning =

document
.getElementById(
    "limitAlert"
);



if(

    budgetLimit > 0 &&

    total >= budgetLimit

){

    warning.style.display =
    "block";

}

else{

    warning.style.display =
    "none";

}


}


/* ==========================
   SEARCH
========================== */

function searchTable() {
    const value = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const rows = document.querySelectorAll("#expenseTable tr");

    rows.forEach(row => {
        const match = row.innerText.toLowerCase().includes(value);
        row.style.display = match ? "" : "none";
    });
}


/* ==========================
   DASHBOARD
========================== */

function updateDashboard() {
    const total = expenses.reduce((sum, item) => sum + item.amount, 0);

    document.getElementById("income").innerText = income;
    document.getElementById("expense").innerText = total;
    document.getElementById("balance").innerText = income - total;
    document.getElementById("reportTotal").innerText = total;

    checkLimit();
}