<?php
	require_once './Logs/Log.php';
	use Logs\Log;

	$logs->logMsg("[MENSAGEM=HELLO_WORLD!]", 'INFO', "Logs/Dias/register-{$data}.log");
?>