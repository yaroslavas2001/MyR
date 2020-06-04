<?php
// Файлы phpmailer
require ‘class.phpmailer.php’;
require ‘class.smtp.php’;
// Переменные
$name = $_POST[‘user_name’];
$number = $_POST[‘user_phone’];
$message = $_POST[‘user_message’];
// Настройки
$mail = new PHPMailer;
$mail->isSMTP(); 
$mail->Host = ‘smtp.yandex.ru’; 
$mail->SMTPAuth = true; 
$mail->Username = ‘yaroslavas2001’; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = ‘zhbr2001yfcnz’; // Ваш пароль
$mail->SMTPSecure = ‘ssl’; 
$mail->Port = 465;
$mail->setFrom(‘yaroslavas2001@yandex.ru’); // Ваш Email
$mail->addAddress(‘service_station_100@mail.ru’); // Email получателя
//$mail->addAddress(‘example@gmail.com’);  Еще один email, если нужно.
// Прикрепление файлов
 for ($ct = 0; $ct < count($_FILES[‘userfile’][‘tmp_name’]); $ct++) {
 $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES[‘userfile’][‘name’][$ct]));
 $filename = $_FILES[‘userfile’][‘name’][$ct];
 if (move_uploaded_file($_FILES[‘userfile’][‘tmp_name’][$ct], $uploadfile)) {
 $mail->addAttachment($uploadfile, $filename);
 } else {
 $msg .= ‘Failed to move file to ‘ . $uploadfile;
 }
 } 
 
// Письмо
$mail->isHTML(true); 
$mail->Subject = “Заголовок”; // Заголовок письма
$mail->Body = “Имя $name . Телефон $number . Почта $message”; // Текст письма
// Результат
if(!$mail->send()) {
 echo ‘Message could not be sent.’;
 echo ‘Mailer Error: ‘ . $mail->ErrorInfo;
} else {
 echo ‘ok’;
}
?>