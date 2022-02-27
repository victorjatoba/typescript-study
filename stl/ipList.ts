function isAllowed(ips: string[], ip: string) {
  return !ips.includes(ip);
}

const blockedList = [
  "192.168.10.1",
  "192.168.10.2",
  "192.168.10.3",
  "192.168.10.4",
];

console.log(isAllowed(blockedList, "192.168.10.1")); // false
console.log(isAllowed(blockedList, "192.168.10.4")); // false
console.log(isAllowed(blockedList, "192.168.10.9")); // true
