// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha Ray
// Created on: Feb 2025
// This file contains the JS functions for index.html

'use strict'

function saveCookieAmount () {
  let savedCount = localStorage.getItem('cookieCount')
  if (savedCount === null) {
    savedCount = 0
  }
  document.getElementById('cookieCount').textContent = savedCount
}

function incrementCookieClicked () {
  let savedCount = localStorage.getItem('cookieCount')
  if (savedCount === null) {
    savedCount = 0
  }
  const newCount = parseInt(savedCount) + 1
  localStorage.setItem('cookieCount', newCount)
  document.getElementById('cookieCount').textContent = newCount
}