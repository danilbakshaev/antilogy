<?php

$subject = "Заявка cо страницы \"Контакты\"";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);

$text = "Имя: $name <br>";
$text .= "Почта: $email <br>";
$text .= "Комментарий: $message <br>";

$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: Antilogy <no-reply@mail.ru\r\n";

mail('rifatvarisov@gmail.com', $subject, $text, $headers);

?>