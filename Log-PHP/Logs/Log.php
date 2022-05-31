<?php
    namespace Logs;

    class Log {
        public function logMsg( $msg, $level, $file )
        {
            $levelStr = $level;
        
            $date = date( 'Y-m-d H:i:s' );

            $msg = sprintf( "[%s] [%s]: %s%s", $date, $levelStr, $msg, PHP_EOL );

            file_put_contents( $file, $msg, FILE_APPEND );

            $this->removerLog();
        }

        private function removerLog()
        {
            $diretorio = 'Logs/Dias/';

            if(is_dir($diretorio)){
                $itens = scandir($diretorio);

                if(count($itens) > 30){
                    unlink($diretorio.$itens[3]);
                }
            }
        }
    }