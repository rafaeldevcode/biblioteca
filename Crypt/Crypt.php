<?php

/**
 * Referencias:
 * openssl_cipher_iv_length(): https://www.php.net/manual/en/function.openssl-cipher-iv-length.php
 * openssl_random_pseudo_bytes(): https://www.php.net/manual/en/function.openssl-random-pseudo-bytes.php
 * openssl_encrypt(): https://www.php.net/manual/en/function.openssl-encrypt.php
 * hash_hmac(): https://www.php.net/manual/pt_BR/function.hash-hmac.php
 * base64_encode(): https://www.php.net/manual/en/function.base64-encode.php
 * base64_decode(): https://www.php.net/manual/en/function.base64-decode.php
 */

namespace Crypt;

class Crypt
{
    /**
     * @var string
     */
    private $cipher;

    /**
     * @var string
     */
    private $key_encript;

    /**
     * @var string
     */
    private $ivlen;

    /**
     * @var string
     */
    private $iv;

    /**
     * @return void
     */
    public function __construct(string $cipher = 'AES-128-CBC')
    {
        $this->cipher      = $cipher;
        $this->key_encript = 'KEY_ENCRYPT'; // Uma senha ou um token qua vai ser usado pra criptografae e descriptografar
        $this->ivlen       = openssl_cipher_iv_length($this->cipher);
        $this->iv          = openssl_random_pseudo_bytes($this->ivlen);
    }

    /**
     * @param string $text
     * @return string
     */
    public function encrypt(string $text): string
    {
        $ciphertext_raw = openssl_encrypt($text, $this->cipher, $this->key_encript, OPENSSL_RAW_DATA, $this->iv);
        $hmac = hash_hmac('sha256', $ciphertext_raw, $this->key_encript, true);
        $cipher_text = base64_encode( $this->iv.$hmac.$ciphertext_raw );

        return $cipher_text;
    }

    /**
     * @param string $text
     * @return string
     */
    public function decrypt(string $cipher_text): string
    {
        $sha2len = 32;
        $cipher_text = base64_decode($cipher_text);

        $iv = substr($cipher_text, 0, $this->ivlen);
        $ciphertext_raw = substr($cipher_text, $this->ivlen+$sha2len);
        $original_plaintext = openssl_decrypt($ciphertext_raw, $this->cipher, $this->key_encript, OPENSSL_RAW_DATA, $iv);

        return $original_plaintext;
    }
}