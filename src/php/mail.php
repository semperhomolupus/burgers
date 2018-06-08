<?php
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $payment = $_POST['payment'];
    $comment = $_POST['message'];
    $call = $_POST['call']; 
    $call = isset($call) ? 'NO' : 'YES'; 
    $mail_message = '
    <html>
        <head>
            <title>Burger</title>
        </head>
        <body>
            <h2>Buy</h2>
            <ul>
                <li>Name: ' . $name . '</li>
                <li>Phone: ' . $tel . '</li>
                <li>Payment: ' . $payment . '</li>
                <li>Comments: ' . $comment . '</li>
                <li>Callback: ' . $call . '</li>
            </ul>
        </body>
    </html>    
    ';
    $headers = "From: Администратор сайта <admin@loftschool.com>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";
    $mail = mail('whitebestnik@yandex.ru', 'Burger', $mail_message, $headers);
    $data = [];
    if ($mail) {
        $data['message'] = "Уважаемый " .  $name .", письмо успешно отправлено, спасибо!";
    }else{
        $data['message'] = "На сервере произошла ошибка. Сожалеем, " . $name;
    }
    echo json_encode($data);
?>