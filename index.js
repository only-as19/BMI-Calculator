const cal = document.getElementById("calculate")
        const result = document.getElementById('result')
        const comment = document.getElementById('comment')

        cal.addEventListener('click', function(){
            let height = document.getElementById('input1').value
            let weight = document.getElementById('input2').value
            let meter = height * 0.3048
            let bmi = weight/(meter*meter)
            result.innerText = "Your BMI is " + bmi.toFixed(2)
            if(bmi<18.5){
                comment.innerText = "You are Underweight 😱"
            }else if(bmi<24.5){
                comment.innerText = "Your Weight is Normal ☺️👍"
            }else if(bmi<29.5){
                comment.innerText = "Your are overweight 🙆👇"
            }else if(bmi>=30){
                comment.innerText = "Your are Extremly Obese 😱😵"
            }
        })