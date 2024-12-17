<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = 'paul.gresset1@gmail.com';
$subject = "Nouveau message de " . $name;
$headers = "From: $email";
if (mail($to, $subject, $message, $headers)) {
  echo "Merci, votre message a été envoyé avec succès !";
} else {
  echo "Désolé, une erreur s'est produite. Veuillez réessayer.";
}
}

?>