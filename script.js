const calculateBtn = document.getElementById("calculateBtn");

if (calculateBtn) {

    calculateBtn.addEventListener("click", function () {

        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value) / 100;

        if (isNaN(weight) || isNaN(height)) {

            document.getElementById("result").textContent = "❌ الرجاء إدخال الوزن والطول.";
            document.getElementById("result").style.color = "red";
            document.getElementById("advice").textContent = "";
            return;

        }

        if (weight <= 0 || height <= 0) {

            document.getElementById("result").textContent = "❌ يجب إدخال أعداد موجبة فقط.";
            document.getElementById("result").style.color = "red";
            document.getElementById("advice").textContent = "";
            return;

        }

        const bmi = weight / (height * height);

        let message = "";
        let advice = "";
        let color = "";

        if (bmi < 18.5) {

            message = "🔵 نحافة";
            advice = "يُنصح بتناول غذاء متوازن واستشارة مختص إذا كانت النحافة شديدة.";
            color = "blue";

        } else if (bmi < 25) {

            message = "🟢 وزن طبيعي";
            advice = "ممتاز! حافظ على غذاء صحي ومارس الرياضة بانتظام.";
            color = "green";

        } else if (bmi < 30) {

            message = "🟡 زيادة وزن";
            advice = "حاول تقليل السكريات وزيادة النشاط البدني.";
            color = "orange";

        } else {

            message = "🔴 سمنة";
            advice = "يُنصح بمراجعة طبيب أو أخصائي تغذية لوضع خطة مناسبة.";
            color = "red";

        }

        document.getElementById("result").style.color = color;
        document.getElementById("result").textContent =
            "مؤشر كتلة الجسم = " + bmi.toFixed(1) + " — " + message;

        document.getElementById("advice").textContent = advice;

    });

}