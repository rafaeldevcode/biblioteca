        /** Table price */
        const kits = [
            {
                "id": 1,
                "tipo_kit": "KIT 1",
                "nome_kit": "1 Unidade de Variclear",
                "infos_kit": [
                    {
                        "icon": "fiber_manual_record",
                        "descricao": "Alívio imediato da dor"
                    },
                    {
                        "icon": "fiber_manual_record",
                        "descricao": "Ajuda a restaurar o tom da pele"
                    },
                    {
                        "icon": "fiber_manual_record",
                        "descricao": "Promove reparo vascular"
                    },
                    {
                        "icon": "fiber_manual_record",
                        "descricao": "Regula o fluxo sanguíneo"
                    },
                    {
                        "icon": "fiber_manual_record",
                        "descricao": "Ajuda a eliminar peso e cansaço nas pernas"
                    }
                ],
                "preco_antes": "247,00",
                "preco_cheio": "22",
                "preco_centavos": "31",
                "preco_a_vista": "197,00",
                "link_comprar": "https://clkdmg.site/pay/90b9e113-5d62-42f3-a757-bff47655530d", 
                "unidade_vendidas": "8.724",
                "imagem": "./images/kit1-fructus.png",
                "avaliacoes": "817"
            },
            {
                "id": 2,
                "tipo_kit": "KIT 2",
                "nome_kit": "2 Unidades de Variclear",
                "estrela_laranja": "estrela-laranja",
                "infos_kit": [
                    {
                        "icon": "fiber_manual_record",
                        "descricao": "Alívio imediato da dor"
                    },
                    {
                        "icon": "fiber_manual_record",
                        "descricao": "Ajuda a restaurar o tom da pele"
                    },
                    {
                        "icon": "fiber_manual_record",
                        "descricao": "Promove reparo vascular"
                    },
                    {
                        "icon": "fiber_manual_record",
                        "descricao": "Regula o fluxo sanguíneo"
                    },
                    {
                        "icon": "fiber_manual_record",
                        "descricao": "Ajuda a eliminar peso e cansaço nas pernas"
                    }
                ],
                "preco_antes": "494,00",
                "preco_cheio": "33",
                "preco_centavos": "63",
                "preco_a_vista": "297,00",
                "link_comprar": "https://clkdmg.site/pay/90b9e113-8b76-4970-ac91-6f816e638747",
                "unidade_vendidas": "13.340",
                "imagem": "./images/kit2-fructus.png",
                "avaliacoes": "1.322"
            },
            {
                "id": 3,
                "tipo_kit": "KIT 3",
                "nome_kit": "3 Unidades de Variclear",
                "infos_kit": [
                    {
                        "icon": "fiber_manual_record",
                        "descricao": "Alívio imediato da dor"
                    },
                    {
                        "icon": "fiber_manual_record",
                        "descricao": "Ajuda a restaurar o tom da pele"
                    },
                    {
                        "icon": "fiber_manual_record",
                        "descricao": "Promove reparo vascular"
                    },
                    {
                        "icon": "fiber_manual_record",
                        "descricao": "Regula o fluxo sanguíneo"
                    },
                    {
                        "icon": "fiber_manual_record",
                        "descricao": "Ajuda a eliminar peso e cansaço nas pernas"
                    }
                ],
                "preco_antes": "741,00",
                "preco_cheio": "44",
                "preco_centavos": "95",
                "preco_a_vista": "396,99",
                "link_comprar": "https://clkdmg.site/pay/90b9e113-c7ab-4e1c-a13b-90787fa32145",  
                "unidade_vendidas": "4.613",
                "imagem": "./images/kit3-fructus.png",
                "avaliacoes": "692"
            }
        ];

        var data = { target: kits };
        var template = _.template($("#tpl-html").text());
        $("#for-table-price").html(template(data));