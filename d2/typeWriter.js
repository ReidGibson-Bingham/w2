let sentence = "hello there from lighthouse labs";
sentence += '\n';

for (let char = 0, ms = 0; char < sentence.length; char++, ms += 200){
  setTimeout(()=> {process.stdout.write(sentence[char])}, ms);
}