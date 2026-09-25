const infoBox = document.getElementById("infoBox");
const infoTitle = document.getElementById("infoTitle");
const infoText = document.getElementById("infoText");

function showInfo(title, steps) {
    infoBox.style.display = "block";
    infoTitle.textContent = title;

    let html = "<ul>";

    steps.forEach(step => {
        html += `<li>${step}</li>`;
    });

    html += "</ul>";

    infoText.innerHTML = html;
}

document.getElementById("burn").addEventListener("click", function () {
    showInfo("🔥 إسعاف الحروق", [
        "✅ أبعد المصاب عن مصدر الحرق.",
        "✅ برّد مكان الحرق بالماء الجاري لمدة 20 دقيقة.",
        "✅ لا تضع الثلج مباشرة على الحرق.",
        "✅ غطِّ الحرق بضمادة أو شاش معقم.",
        "🚑 اتصل بالإسعاف إذا كان الحرق شديدًا."
    ]);
});

document.getElementById("bleeding").addEventListener("click", function () {
    showInfo("🩸 إسعاف النزيف", [
        "✅ اضغط على مكان النزيف بقطعة قماش نظيفة.",
        "✅ ارفع الطرف المصاب إذا أمكن.",
        "✅ لا تنزع القماش إذا امتلأ بالدم، أضف قطعة أخرى.",
        "✅ حافظ على هدوء المصاب.",
        "🚑 اطلب الإسعاف إذا لم يتوقف النزيف."
    ]);
});

document.getElementById("fracture").addEventListener("click", function () {
    showInfo("🦴 إسعاف الكسور", [
        "✅ لا تحرك الطرف المصاب.",
        "✅ ثبّت الطرف المصاب بجبيرة.",
        "✅ ضع كمادة باردة لتخفيف التورم.",
        "✅ لا تحاول إعادة العظم إلى مكانه.",
        "🚑 انقل المصاب إلى المستشفى."
    ]);
});