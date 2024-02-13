const form = document.querySelector('form');

form.addEventListener("submit",function (e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    
    if(height===' ' || height<= 0 || isNaN(height) ){
        results.innerHTML=(`give a valid Height ${height}`);
    }
    else if(weight===' ' || weight<=0 || isNaN(weight)){
        results.innerHTML=(`give a valid Weight ${weight}`);
    }
    else{
        const Bmi = (weight / ((height*height)/10000)).toFixed(2);
        results.innerHTML=`${Bmi}`
        if(Bmi<18.6){
            results.innerHTML=(`Under Weight : ${Bmi}`);
        }
        else if(Bmi>18.6 && Bmi<24.9){
            results.innerHTML=(`Normal Weight : ${Bmi}`);
        }
        else{
            results.innerHTML=(`Overweight : ${Bmi}`);
        }
    }
});

function resetValues() {
    // Reset input fields
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";

    // Reset result display
    document.getElementById("results").innerHTML = "Result: ";}
