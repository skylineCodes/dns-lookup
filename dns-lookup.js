import dgram from 'dgram';
import dnsPacket from 'dns-packet';

// DNS server IP and port
const DNS_SERVER = '8.8.8.8';
const DNS_PORT = 53;

// Create a DNS query packet
const createDnsQuery = (domain) => {
  return dnsPacket.encode({
    type: 'query',
    id: Math.floor(Math.random() * 65535),
    flags: dnsPacket.RECURSION_DESIRED,
    questions: [{
      type: 'A',
      name: domain
    }]
  });
};

// Parse a DNS response
const parseDnsResponse = (response) => {
  const decoded = dnsPacket.decode(response);
  return decoded.answers.map(answer => ({
    name: answer.name,
    type: answer.type,
    ttl: answer.ttl,
    data: answer.data
  }));
};

// Send a DNS query
const sendDnsQuery = (domain) => {
  const socket = dgram.createSocket('udp4');
  const query = createDnsQuery(domain);

  socket.send(query, 0, query.length, DNS_PORT, DNS_SERVER, (err) => {
    if (err) {
      console.error('Failed to send query:', err);
    } else {
      console.log('DNS query sent!');
    }
  });

  socket.on('message', (msg) => {
    const answers = parseDnsResponse(msg);
    console.log('Received DNS response:', answers);
    socket.close();
  });

  socket.on('error', (err) => {
    console.error('Socket error:', err);
    socket.close();
  });
};

// DNS lookup for a domain
const domain = process.argv[2];
sendDnsQuery(domain);
