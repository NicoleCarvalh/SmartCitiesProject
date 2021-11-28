<?php
include "database.php";

$name = $_POST['name'];
$email = $_POST['email'];
$feedback = $_POST['feedback'];

$sql = "INSERT INTO feedback(name,email,feedback) VALUES ('$name','$email','$feedback')";
if($result = mysqli_query($conn,$sql)){
echo "<h3><span style=\"color: green;\">Feedback enviado com sucesso</span></h3>";
}
else{
echo "<h3><span style=\"color:red;\">Feedback não enviado, falha</span></h3>";
}


?>