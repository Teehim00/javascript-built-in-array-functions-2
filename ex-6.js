const carCollection = ["toyota", "fiat", "honda", "bmw"];

//เช็ค ก่อนว่าซ้ำมั้ย
//ถ้า รถ ซ้ำ ให้ แสดงข้อความ <car-brand> already exists in position <position> of the car collection.
// ไม่ซ้ำให้เพิ่มค่าเข้าไป และแสดง New car collection is: Toyota, Fiat, Honda, BMW, <ยี่ห้อรถใหม่>.
function updateCarCollection(carBrand) {
  // Start coding here
  if (carCollection.includes(carBrand)){
    return `${carBrand} has already existed in the 1 position of car collection.`
  }else{
    carCollection.push(carBrand)
    return `new car collection is : ${carCollection}`
  }
}


//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.


//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
