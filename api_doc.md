# API Required for OrcaNet

## Base URL

## Endpoints

### Wallet Endpoints
#### Get Balance
*Return the balance of the given wallet ID*
- **Endpoint:** `/balance`
- **Method:** GET
- **Authentication:** None
- **Parameters:**
  - `wallet_id` (required): The id of the wallet to retrieve.
- **Example Request:**
    ```
    GET https://.com/api/balance
    ```
- **Example Payload:**
    ```json
    {
      "wallet_id": "13hgriwdGXvPyWFABDX6QByyxvN8cWCgDp"
    }
- **Example Response:**
    ```json
    {
        "wallet_id": "13hgriwdGXvPyWFABDX6QByyxvN8cWCgDp",
        "balance": "100.00",
    }
    ```
#### Get Revenue
*Return the revenue in the past year (including the latest month) of the given wallet ID*
- **Endpoint:** `/revenue`
- **Method:** GET
- **Authentication:** None
- **Parameters:**
  - `wallet_id` (required): The id of the wallet to retrieve.
- **Example Request:**
    ```
    GET https://.com/api/revenue
    ```
- **Example Payload:**
    ```json
    {
      "wallet_id": "13hgriwdGXvPyWFABDX6QByyxvN8cWCgDp"
    }
- **Example Response:**
    ```json
    {
        "_id": "65680d250505420b42427a82",
        "wallet_id": "13hgriwdGXvPyWFABDX6QByyxvN8cWCgDp",
        "revenue":[
          {
            "time": "2023-11",
            "income": "20",
            "expand": "23",
          },
        ],
    }
    ```
#### Get Transaction (latest 30)
*Return the **latest 30** transactions of the given wallet ID*
- **Endpoint:** `/transaction_latest`
- **Method:** GET
- **Authentication:** None
- **Parameters:**
  - `wallet_id` (required): The id of the wallet to retrieve.
- **Example Request:**
    ```
    GET https://.com/api/revenue
    ```
- **Example Payload:**
    ```json
    {
      "wallet_id": "13hgriwdGXvPyWFABDX6QByyxvN8cWCgDp"
    }
- **Example Response:**
    ```json
    {
        "_id": "65680d250505420b42427a82",
        "wallet_id": "13hgriwdGXvPyWFABDX6QByyxvN8cWCgDp",
        "transaction":[
          {
            "transaction_id": "59a53ee428a643e940546c5ccfc5663e",
            "reason": "Dota2_OnePunchGodModeMenu.exe"
            "status": "pending",
            "time": "2023-11-30T04:20:20.244Z",
            "amount": "0.000012323",
          },
        ],
    }
    ```

#### Get Transaction (complete)
*Return **all** the transactions of the given wallet ID*
- **Endpoint:** `/transaction_complete`
- **Method:** GET
- **Authentication:** None
- **Parameters:**
  - `wallet_id` (required): The id of the wallet to retrieve.
- **Example Request:**
    ```
    GET https://.com/api/revenue
    ```
- **Example Payload:**
    ```json
    {
      "wallet_id": "13hgriwdGXvPyWFABDX6QByyxvN8cWCgDp"
    }
- **Example Response:**
    ```json
    {
        "_id": "65680d250505420b42427a82",
        "wallet_id": "13hgriwdGXvPyWFABDX6QByyxvN8cWCgDp",
        "transaction":[
          {
            "transaction_id": "59a53ee428a643e940546c5ccfc5663e",
            "reason": "Dota2_OnePunchGodModeMenu.exe"
            "status": "pending",
            "time": "2023-11-30T04:20:20.244Z",
            "amount": "0.000012323",
          },
        ],
    }
    ```

#### Post Transfer
*Return the transaction of the given wallet ID*
- **Endpoint:** `/transfer`
- **Method:** POST
- **Authentication:** None
- **Parameters:**
  - `wallet_id` (required): The id of the wallet to retrieve.
- **Example Request:**
    ```
    GET https://.com/api/transfer
    ```
- **Example Payload:**
    ```json
    {
      "wallet_id": "13hgriwdGXvPyWFABDX6QByyxvN8cWCgDp"
    }
- **Example Response:**
    ```json
    {
        "_id": "65680d250505420b42427a82",
        "wallet_id": "13hgriwdGXvPyWFABDX6QByyxvN8cWCgDp",
        "amount": "20.0002",
        "receive_id": "XvPyWFABdGQByyxvN8cWCgDpDX613hgriw",
        "reason": "Transaction test",
    }
    ```

### Stats Page
#### Get Speed
*Return the upload and download speed (in Kb/s) of the given public key.*
- **Endpoint:** `/transaction`
- **Method:** GET
- **Authentication:** None
- **Parameters:**
  - `pub_key` (required): The id of the wallet to retrieve.
- **Example Request:**
    ```
    GET https://.com/api/transaction
    ```
- **Example Payload:**
    ```json
    {
      "pub_key": "13hgriwdGXvPyWFABDX6QByyxvN8cWCgDp"
    }
- **Example Response:**
    ```json
    {
        "_id": "65680d250505420b42427a82",
        "pub_key": "13hgriwdGXvPyWFABDX6QByyxvN8cWCgDp",
        "upload_speed": "30",
    		"download_speed": "2000",        
    }
    ```

#### Get File Type
*Return the upload and download files' types in the past month of the given public key.*
- **Endpoint:** `/types`
- **Method:** GET
- **Authentication:** None
- **Parameters:**
  - `pub_key` (required): The public key to retrieve.
- **Example Request:**
    ```
    GET https://.com/api/types
    ```
- **Example Payload:**
    ```json
    {
      "pub_key": "13hgriwdGXvPyWFABDX6QByyxvN8cWCgDp"
    }
- **Example Response:**
    ```json
    {
        "_id": "65680d250505420b42427a82",
        "pub_key": "13hgriwdGXvPyWFABDX6QByyxvN8cWCgDp",
        "upload_speed": "30",
    		"download_speed": "2000",        
    }
    ```

#### Get Activity
*Return the upload and download files of **each day** in the previous three months.*
- **Endpoint:** `/activity`
- **Method:** GET
- **Authentication:** None
- **Payload:**
  - `pub_key` (required): The public key to retrieve.
- **Example Request:**
    ```
    GET https://.com/api/activity
    ```
- **Example Payload:**
    ```json
    {
      "pub_key": "13hgriwdGXvPyWFABDX6QByyxvN8cWCgDp"
    }
- **Example Response:**
    ```json
    {
        "_id": "65680d250505420b42427a82",
        "pub_key": "13hgriwdGXvPyWFABDX6QByyxvN8cWCgDp",
        "activities": [
          {
            "date": "Mar30",
            "download": "10",
            "upload": "2",
          },
        ],        
    }
    ```

### Mining Page
#### Get Device List
*Get the device list from the OS.*
- **Endpoint:** `/device_list`
- **Method:** GET
- **Authentication:** None
- **Parameters:**
  
- **Example Request:**
    ```
    GET https://.com/api/device_list
    ```
- **Example Payload:**
    ```json
    {
      "pub_key": "13hgriwdGXvPyWFABDX6QByyxvN8cWCgDp"
    }
- **Example Response:**
    ```json
    {
        "_id": "65680d250505420b42427a82",
        "pub_key": "13hgriwdGXvPyWFABDX6QByyxvN8cWCgDp",
        "devices": [
          {
            "device_id": "65680d250505420b42427a82",
            "device_name": "GeForce RTX 4090",
            "hash_power": "37.56",
            "status": "Mining",
            "power": "30",
            "profitability": "0.5523342",
          },
        ],
    }
    ```

#### Put Device
*Turn on/off the device*
- **Endpoint:** `/device`
- **Method:** GET
- **Authentication:** None
- **Parameters:**
  - `device_id` (required): The device.
- **Payload:**
  - `pub_key` (required): The public key to retrieve.
  - `switch` (required): The status of the device should be.
- **Example Request:**
    ```
    GET https://.com/api/device?device_id=80d250505420b42427a82
    ```
- **Example Payload:**
    ```json
    {
      "pub_key": "13hgriwdGXvPyWFABDX6QByyxvN8cWCgDp",
      "switch": "1",
    }
- **Example Response:**
    ```json
    {
        "_id": "65680d250505420b42427a82",
        "pub_key": "13hgriwdGXvPyWFABDX6QByyxvN8cWCgDp",
        "device_id": "80d250505420b42427a82",
        "device_name": "GeForce RTX 4090",
        "hash_power": "37.56",
        "status": "Mining",
        "power": "30",
        "profitability": "0.5523342",
    }
    ```
