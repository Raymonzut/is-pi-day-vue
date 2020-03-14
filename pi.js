// taylor series implementation from Andrew Jenning: http://ajennings.net/
function get_pi(digits=42n, chop=10n) {
  let i = 1n;
  let x = 3n * (10n ** (digits + chop));
  let p = x;
  while (x > 0) {
          x = x * i / ((i + 1n) * 4n);
          p += x / (i + 2n);
          i += 2n;
  }
  pi =  p / (10n ** chop)
  return '3.' + pi.toString().slice(1);
}
