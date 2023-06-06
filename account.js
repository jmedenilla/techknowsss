"use strict";
const textpop = document.querySelector(`.text`);
const btn = document.getElementById(`btns`);

// Signup
function signup(e) {
  event.preventDefault();
  let email = document.getElementById(`email`).value;
  let username = document.getElementById(`username`).value;
  let password = document.getElementById(`password`).value;
  const user = {
    email: email,
    username: username,
    password: password,
  };

  const json = JSON.stringify(user);
  localStorage.setItem(username, json);
  document.getElementById(`email`).value = ``;
  document.getElementById(`username`).value = ``;
  document.getElementById(`password`).value = ``;
}

// Login
function login(e) {
  event.preventDefault();
  let username = document.getElementById(`username`).value;
  let password = document.getElementById(`password`).value;

  const user = localStorage.getItem(username);
  const data = JSON.parse(user);
  console.log(data);

  if (!user || !password) {
    alert("Please fill out the form");
  } else if (user === null) {
    alert(`Wrong Username`);
  } else if (username === data.username && password === data.password) {
    window.location.href = "inside.html";
  } else {
    alert(`Wrong Password`);
  }
}
