```json
{
    "name": "script.js",
    "content": "
// تعريف دالة لتحميل البيانات
async function loadData() {
    try {
        // استدعاء واجهة برمجة التطبيقات لتحميل البيانات
        const response = await fetch('/api/data');
        const data = await response.json();
        
        // عرض البيانات على الموقع
        displayData(data);
    } catch (error) {
        // عرض رسالة خطأ
        console.error('خطأ في تحميل البيانات:', error);
    }
}

// تعريف دالة لعرض البيانات
function displayData(data) {
    //اختيار العنصر الذي سيتم عرض البيانات فيه
    const dataElement = document.getElementById('data');
    
    // تطهير المحتوى السابق
    dataElement.innerHTML = '';
    
    // تعريف حلقة لتركيب عناصر البيانات
    data.forEach(item => {
        // إنشاء عنصر جديد
        const itemElement = document.createElement('div');
        
        // إضافة текст العنصر
        itemElement.textContent = item.name;
        
        // إضافة العنصر إلى العنصر الأب
        dataElement.appendChild(itemElement);
    });
}

// استدعاء الدالة لتحميل البيانات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', loadData);

// تعريف دالة لتoggles حالة التحرير
function toggleEditMode() {
    //اختيار العناصر التي سيتم تغيير حالتها
    const editButtons = document.querySelectorAll('.edit-button');
    
    // تعريف حلقة لتحديث حالة كل زر
    editButtons.forEach(button => {
        // التحقق مما إذا كان الزر في حالة تحرير
        if (button.classList.contains('active')) {
            // إزالة العلامة الفعالة
            button.classList.remove('active');
        } else {
            // إضافة العلامة الفعالة
            button.classList.add('active');
        }
    });
}

// تعريف دالة للاستجابة لحدث النقر على زر التحرير
function handleEditButtonClicked(event) {
    // التحقق مما إذا كان الحدث قد نشأ من زر التحرير
    if (event.target.classList.contains('edit-button')) {
        // استدعاء الدالة لتoggles حالة التحرير
        toggleEditMode();
    }
}

// استدعاء الدالة للاستجابة لحدث النقر على زر التحرير
document.addEventListener('click', handleEditButtonClicked);

    ",
    "type": "JavaScript",
    "summary": "هذا الملف يحتوي على كود جافاسكريبت لتحميل البيانات من واجهة برمجة التطبيقات وعرضها على الموقع، بالإضافة إلى إدارة حالة التحرير وتoggles حالة التحرير عند النقر على زر التحرير."
}
```