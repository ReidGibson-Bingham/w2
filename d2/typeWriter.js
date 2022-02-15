let sentence = "hello there from lighthouse labs";
sentence += '\n';

for (let char = 0, ms = 0; char < sentence.length; char++, ms += 200){
  setTimeout(()=> {process.stdout.write(sentence[char])}, ms);
}

//SHA256:vzDQPNcJjkT/cZn3vo1cVAu/y7Cs9c+A4XJFspv4H4w