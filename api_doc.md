# API Required for OrcaNet

## Base URL

## Endpoints

### Wallet Eendpoints
#### Get Balance
*Return the balance of the account*
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
*Return the revenue in the past year (including the latest month)*
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
#### Get Transaction
*Return the transaction of the given wallet ID*
- **Endpoint:** `/transaction`
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
