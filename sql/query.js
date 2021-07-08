export const create_db_product = `CREATE TABLE kim  ( 
        ID INT(11) NOT NULL AUTO_INCREMENT, 
        itemcode VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8_general_ci', 
        itemcode_prod VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8_general_ci', 
        itemname VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8_general_ci', 
        option VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8_general_ci', 
        type VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8_general_ci', 
        core DOUBLE NULL DEFAULT NULL, 
        earth VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8_general_ci', 
        diameter DOUBLE NULL DEFAULT NULL, 
        file_check VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8_general_ci', 
        colortext VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8_general_ci', 
        colorcode VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8_general_ci', 
        old VARCHAR(50) NULL DEFAULT NULL COLLATE 'utf8_general_ci', 
        MB_version DOUBLE NULL DEFAULT NULL, 
        MB_name VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8_general_ci', 
        MB_date DATE NULL DEFAULT NULL, 
        pdf_received_date DATE NULL DEFAULT NULL, 
        PRIMARY KEY (ID) USING BTREE 
) 
`;
