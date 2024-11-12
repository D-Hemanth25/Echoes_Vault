# OTP-Based Authentication System

## Overview
The OTP-Based Authentication System is designed to provide a secure method for users to access protected resources. This system ensures that users can only log in using a One-Time Password (OTP) sent to their registered email address. 

## Goals
- Simulate a scenario where users can only access a specific page if they are logged in.
- Implement a secure login process using OTP.
- Utilize JSON Web Tokens (JWT) for user authentication.

## Features
- **OTP Generation**: Upon login request, an OTP is generated and sent to the user's registered email.
- **OTP Verification**: Users must enter the OTP they received to gain access.
- **JWT-Based Authentication**: Once the OTP is verified, a JWT is issued to the user for subsequent requests.
- **Session Management**: The JWT will be used to manage user sessions securely.

## Workflow
1. **User  Requests Login**:
   - The user enters their email address and requests to log in.
   
2. **OTP Generation**:
   - The system generates a unique OTP and sends it to the user's registered email.
   
3. **User  Enters OTP**:
   - The user receives the OTP in their email and enters it into the system.
   
4. **OTP Verification**:
   - The system verifies the entered OTP against the generated OTP.
   - If the OTP is correct, the user is authenticated.
   
5. **JWT Issuance**:
   - Upon successful verification, the system generates a JWT for the user.
   - The JWT can be used for accessing protected resources.

6. **Access Protected Resources**:
   - The user can now access pages that require authentication by including the JWT in their requests.

## Improvements
```
for future
```
- **Expiration**: The OTP should have a short expiration time to enhance security.
- **Rate Limiting**: Implement rate limiting on OTP requests to prevent abuse.
- **Secure Transmission**: Ensure all communications are conducted over HTTPS to protect sensitive data.
