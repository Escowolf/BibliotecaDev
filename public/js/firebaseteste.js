// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzVibo9dzSY4RanPdIVnLouTA6mzDPtrs",
    authDomain: "bibliotecadevend.firebaseapp.com",
    databaseURL: "https://bibliotecadevend-default-rtdb.firebaseio.com",
    projectId: "bibliotecadevend",
    storageBucket: "bibliotecadevend.appspot.com",
    messagingSenderId: "846419182189",
    appId: "1:846419182189:web:90650898ab6ab54f09f564",
    measurementId: "G-HL3H3TLRR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase, ref, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";

const db = getDatabase();

var name = document.getElementById("name");
var senha = document.getElementById("senha");
var cpf = document.getElementById("cpf");

var createBtn = document.getElementById("createBtn");
var updateBtn = document.getElementById("updateBtn");
var readBtn = document.getElementById("readBtn");
var deleteBtn = document.getElementById("deleteBtn");

function InsertData() {
    set(ref(db, "users/" + cpf.value), {
        cpf: cpf.value,
        name: name.value,
        senha: senha.value
        
    })
        .then(() => {
            alert("Seus dados foram salvos com sucesso!");
        })
        .catch((error) => {
            alert("Algo deu errado! Erro" + error);
        });
}

createBtn.addEventListener('click', InsertData);