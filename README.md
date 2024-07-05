# DNS Lookup with UDP in Node.js

This project demonstrates how to perform a DNS lookup using the UDP protocol in Node.js with ES6 syntax. The implementation includes sending a DNS query to a public DNS server and parsing the response.

## Prerequisites

- Node.js installed (v14 or later recommended)
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the source code.

   ```sh
   git clone https://github.com/yourusername/dns-lookup-udp.git
   cd dns-lookup-udp

2. Install the required dependencies.
   
   ```sh
   npm install

## Usage
   To perform a DNS lookup, run the `dns-lookup.js` script with the domain name as an argument.
   
   ```sh
   node dns-lookup.js <domain>
   ```

   For example, to look up the IP address of `google.com`:

   ```sh
   node dns-lookup.js google.com
   ```

Project Structure
-----------------

*   dns-lookup.js: Main script for performing the DNS lookup.
    

How It Works
------------

1.  **Creating the UDP Socket**:
    
    *   A UDP socket is created for IPv4 communication using dgram.createSocket('udp4').
        
2.  **DNS Query Packet Creation**:
    
    *   The createDnsQuery(domain) function constructs a DNS query packet for the specified domain using the dns-packet library.
        
3.  **Sending the DNS Query**:
    
    *   The sendDnsQuery(domain) function sends the DNS query packet to the DNS server (Google's public DNS server by default) using the UDP socket.
        
4.  **Handling the DNS Response**:
    
    *   The script listens for incoming messages on the UDP socket. When a response is received, it is parsed, and the result is logged to the console.
        
5.  **Error Handling**:
    
    *   The script includes error handling for socket errors.

Dependencies
------------

*   dgram: Node.js module for UDP datagram sockets.
    
*   dns-packet: Library for encoding and decoding DNS packets.
    

Example Output
--------------

```sh
DNS query sent
Received DNS response: [
  {
    name: 'google.com',
    type: 'A',
    ttl: 143,
    data: '216.58.223.206'
  }
]

```

License
-------

This project is licensed under the MIT License. See the LICENSE file for details.