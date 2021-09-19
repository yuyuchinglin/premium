<?php

if (isset($_POST['submit'])) {
  $email = $_POST['email'];
  $content = "Hi, Yu-Ching,\r\n\r\nI want to know your portfolio's password. Thanks.\r\n\r\nFrom: $email";
  $recipient = "yuyuchinglin@gmail.com";
  $subject = "Portfolio Password Requested";
  $headers = "From: " . $email;
  mail($recipient, $subject, $content, $headers) or die("Error!");

  header('Location: /works/iot/index.php?mailsent');
}
