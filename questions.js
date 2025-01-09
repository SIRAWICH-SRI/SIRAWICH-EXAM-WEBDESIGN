// Array of questions grouped by category (25 questions each)

const questions = [
  {
    category: "EASY",
    questions: [
      {
        question: "คลาส 'Iterable' ในภาษา Python แทนอะไร?",
        options: ["อ็อบเจ็กต์ที่สามารถวนลูปได้","อ็อบเจ็กต์ที่มีจำนวนข้อมูลตายตัว","อ็อบเจ็กต์ที่เก็บข้อมูลในรูปแบบดิกชันนารี"],
        correctAnswer: 0,
      },
      {
        question: "อ็อบเจ็กต์ใดใน Python ที่เป็นอินสแตนซ์ของ 'Iterable'?",
        options: ["List", "Set","Integer"],
        correctAnswer: 0,
      },
      {
        question: "ฟังก์ชันใดใช้ในการสร้าง Iterator จาก Iterable ใน Python?",
        options: ["get_iterator()","iter()","next()"],
        correctAnswer: 1,
      },
      {
        question: "Iterator ใช้เมธอดใดในการคืนค่าข้อมูลถัดไป?",
        options: ["next()","iter()","__iter__()"],
        correctAnswer: 0,
      },
      {
        question: "ข้อใดเป็นความจริงเกี่ยวกับ Iterator?",
        options: ["Iterator สามารถวนลูปซ้ำได้หลายครั้ง","Iterator จะเก็บตำแหน่งปัจจุบันของการวนลูปใน Iterable","Iterator ไม่มีสถานะ"],
        correctAnswer: 1,
      },
      {
        question: "เราสามารถตรวจสอบว่าอ็อบเจ็กต์ใน Python เป็น Iterable ได้อย่างไร?",
        options: ["ใช้ isinstance(obj, Iterable)","ใช้ hasattr(obj, '__next__')","ใช้ hasattr(obj, '__iter__')"],
        correctAnswer: 2,
      },
      {
        question: "เมื่อ Iterator หมดข้อมูลใน Python จะเกิดอะไรขึ้น?",
        options: ["จะเกิด ValueError","จะเกิด StopIteration exception","จะเริ่มวนลูปใหม่จากจุดเริ่มต้น"],
        correctAnswer: 1,
      },
      {
        question: "อะไรที่สามารถใช้ในการวนลูปผ่าน Iterable ใน Python ด้วย for loop?",
        options: ["iter()","next()","ไม่มีคำตอบที่ถูกต้อง"],
        correctAnswer: 2,
      },
      {
        question: "ผลลัพธ์ของโค้ดนี้จะเป็นอย่างไร? \n \n iter_list = iter([1, 2, 3]) \n next(iter_list) \n next(iter_list)",
        options: ["[1, 2]","1, 2","1, 3"],
        correctAnswer: 1,
      },
      {
        question: "ข้อใดเป็นการใช้งานที่ถูกต้องในการสร้าง Iterator?",
        options: ["class MyIterator: pass","class MyIterator: def __next__(self): pass","class MyIterator: def __iter__(self): pass"],
        correctAnswer: 1,
      },
      {
        question: "ในบริบทของ Iterator, 'StopIteration' หมายความว่าอะไร?",
        options: ["Iterator เสร็จสิ้นการวนลูปทั้งหมดแล้ว","Iterator พบข้อผิดพลาด","Iterable ถูกแก้ไขแล้ว"],
        correctAnswer: 0,
      },
      {
        question: "สตริงใน Python ถือเป็น Iterable หรือไม่?",
        options: ["ไม่ใช่","ใช่","เฉพาะถ้ามีแค่ตัวเลข"],
        correctAnswer: 1,
      },
      {
        question: "ข้อใดต่อไปนี้ไม่ใช่ Iterable ใน Python?",
        options: ["ดิกชันนารี","ลิสต์","จำนวนเต็ม"],
        correctAnswer: 2,
      },
      {
        question: "หากคุณมีลิสต์ใน Python, ฟังก์ชันใดที่ใช้สร้าง Iterator จากลิสต์นั้น?",
        options: ["list()","iter()","next()"],
        correctAnswer: 0,
      },
      {
        question: "เมธอดใดที่เป็นการ implement ของ Iterable object?",
        options: ["__next__()","__iter__()","get_iterator()"],
        correctAnswer: 1,
      },
      {
        question: "ข้อยกเว้นใดที่ถูกโยนเมื่อฟังก์ชัน 'next()' ถึงจุดสิ้นสุดของ Iterator?",
        options: ["KeyError","StopIteration","IndexError"],
        correctAnswer: 1,
      },
      {
        question: "การใช้ 'next()' กับ Iterator ใน Python ใช้รูปแบบใด?",
        options: ["next(iterator)","iterator.next()", "iterator.next_item()"],
        correctAnswer: 0,
      },
      {
        question: "หากคุณต้องการแปลง range object ให้เป็น Iterator ใน Python ต้องทำอย่างไร?",
        options: ["โดยการเรียก next()","โดยการส่งไปยัง iter()","โดยการเรียก list()"],
        correctAnswer: 1,
      },
      {
        question: "ข้อใดเป็นความจริงเกี่ยวกับ Iterable?",
        options: ["สามารถเข้าถึงข้อมูลโดยใช้ next()","สามารถวนลูปได้แค่ครั้งเดียว","สามารถวนลูปได้หลายครั้ง"],
        correctAnswer: 2,
      },
      {
        question: "หากเรียก next() บน Iterator ที่หมดข้อมูลแล้ว จะเกิดอะไรขึ้น?",
        options: ["เกิด ValueError","เกิด StopIteration exception", "วนลูปเริ่มต้นใหม่"],
        correctAnswer: 1,
      },
      {
        question: "เมธอด __iter__() ใน Iterable object คืนค่าอะไร?",
        options: ["อ็อบเจ็กต์ Iterable ตัวเอง","อ็อบเจ็กต์ Iterator ใหม่","ค่าถัดไปใน Iteration"],
        correctAnswer: 1,
      },
      {
        question: "เราสามารถวนลูปผ่าน Iterable โดยไม่ต้องเรียก next() ด้วยวิธีใด?",
        options: ["โดยใช้ for loop","โดยใช้ฟังก์ชัน list()","โดยใช้ฟังก์ชัน iter()"],
        correctAnswer: 0,
      },
      {
        question: "ข้อใดเป็นความแตกต่างระหว่าง Iterable และ Iterator?",
        options: ["Iterable ใช้ใน for loop ในขณะที่ Iterator ใช้กับ next()","Iterable เก็บข้อมูลแค่หนึ่งรายการในขณะที่ Iterator เก็บหลายรายการ","Iterable เก็บข้อมูลไว้ในขณะที่ Iterator ไม่เก็บข้อมูล"],
        correctAnswer: 0,
      },
      {
        question: "เราสามารถตรวจสอบว่าอ็อบเจ็กต์เป็น Iterator ได้อย่างไร?",
        options: ["ใช้ isinstance(obj, Iterator)","ใช้ hasattr(obj, '__iter__')","ใช้ hasattr(obj, '__next__')"],
        correctAnswer: 2,
      },
      {
        question: "ประเภทใดใน Python ที่ไม่ใช่ Iterable?",
        options: ["สตริง","เซต","จำนวนเต็ม"],
        correctAnswer: 2,
      },
    ],
  },

  {
    category: "NORMAL",
    questions: [
      {
        question: "เมธอด __iter__() ใน Python ทำหน้าที่อะไร?",
        options: ["คืนค่ารายการถัดไป", "เริ่มต้นการวนลูป", "คืนค่า Iterator"],
        correctAnswer: 2,
    },
    {
        question: "ออบเจ็กต์ใดบ้างที่สามารถเป็น Iterable ใน Python?",
        options: ["จำนวนเต็ม (Integer)", "เซต (Set)", "ฟังก์ชัน (Function)"],
        correctAnswer: 1,
    },
    {
        question: "ออบเจ็กต์ต้องมีเมธอดอะไรในการทำให้เป็น Iterable ใน Python?",
        options: ["__next__()", "__iter__()", "__call__()"],
        correctAnswer: 1,
    },
    {
        question: "วัตถุประสงค์หลักของ Iterator ใน Python คืออะไร?",
        options: ["เก็บข้อมูล", "วนลูปผ่านออบเจ็กต์ที่เป็น Iterable", "กำหนดข้อผิดพลาดที่กำหนดเอง"],
        correctAnswer: 1,
    },
    {
        question: "เมื่อเรียกใช้ next() กับ Iterator ใน Python จะเกิดอะไรขึ้น?",
        options: ["คืนค่ารายการใหม่ใน Iterator", "คืนค่ารายการถัดไปจาก Iterator", "วนลูปไปยังเริ่มต้นใหม่"],
        correctAnswer: 1,
    },
    {
        question: "เมธอดใดที่ใช้ในการแปลง Iterable ให้เป็น Iterator ใน Python?",
        options: ["iter()", "next()", "__next__()"],
        correctAnswer: 0,
    },
    {
        question: "ถ้าเรียก next() กับ Iterator ที่ไม่มีข้อมูลเหลือ จะเกิดข้อผิดพลาดอะไร?",
        options: ["StopIteration", "IndexError", "TypeError"],
        correctAnswer: 0,
    },
    {
        question: "ข้อใดคือความจริงเกี่ยวกับฟังก์ชัน 'iter()' ใน Python?",
        options: ["ใช้แปลงสตริงให้เป็นลิสต์", "คืนค่า Iterator จาก Iterable", "ใช้ตรวจสอบว่าออบเจ็กต์เป็น Iterable หรือไม่"],
        correctAnswer: 1,
    },
    {
        question: "ออบเจ็กต์ใดต่อไปนี้ไม่ใช่ Iterator ใน Python?",
        options: ["ลิสต์ (List)", "ทูเพิล (Tuple)", "ออบเจ็กต์ไฟล์ (File object)"],
        correctAnswer: 0,
    },
    {
        question: "ฟังก์ชัน next() ใน Python ใช้เพื่อทำอะไร?",
        options: ["คืนค่ารายการถัดไปจาก Iterable", "คืนค่า Iterator ถัดไป", "คืนค่าข้อผิดพลาดเมื่อไม่มีข้อมูลเหลือ"],
        correctAnswer: 0,
    },
    {
        question: "ข้อใดคือความแตกต่างหลักระหว่าง Iterable และ Iterator?",
        options: ["Iterator ใช้งานได้เพียงครั้งเดียว ในขณะที่ Iterable สามารถใช้งานซ้ำได้", "Iterable ใช้งานได้เพียงครั้งเดียว ในขณะที่ Iterator สามารถใช้งานซ้ำได้", "ทั้ง Iterable และ Iterator สามารถใช้งานซ้ำได้"],
        correctAnswer: 0,
    },
    {
        question: "ผลลัพธ์จากโค้ดนี้คืออะไร? \n\niter_list = iter([1, 2, 3])\nnext(iter_list)\nnext(iter_list)",
        options: ["1, 2", "1, 3", "2, 3"],
        correctAnswer: 0,
    },
    {
        question: "เมื่อสร้าง Iterator ด้วยคลาสใน Python ต้องทำเมธอดอะไรบ้าง?",
        options: ["__next__() และ __iter__()", "__next__() เท่านั้น", "__iter__() เท่านั้น"],
        correctAnswer: 0,
    },
    {
        question: "เมธอดใดใช้เพื่อดึงค่าถัดไปจาก Iterator ใน Python?",
        options: ["__iter__()", "next()", "__next__()"],
        correctAnswer: 1,
    },
    {
        question: "เราจะตรวจสอบว่าออบเจ็กต์เป็น Iterator ใน Python ได้อย่างไร?",
        options: ["ใช้ isinstance(obj, Iterator)", "ใช้ hasattr(obj, '__next__')", "ใช้ isinstance(obj, Iterable)"],
        correctAnswer: 0,
    },
    {
        question: "ถ้าเรียก next() กับ Iterator ที่ไม่มีข้อมูลเหลือ จะเกิดอะไรขึ้น?",
        options: ["เกิดข้อผิดพลาด StopIteration", "คืนค่า None", "คืนค่า Iterator ใหม่"],
        correctAnswer: 0,
    },
    {
        question: "เราสามารถใช้ Iterator กับฟังก์ชัน for ได้หรือไม่?",
        options: ["ได้ เพราะ for ใช้ __next__() เพื่อดึงข้อมูล", "ไม่ได้ เพราะ Iterator ใช้ next() เท่านั้น", "ได้ แต่ต้องใช้ while loop แทน"],
        correctAnswer: 0,
    },
    {
        question: "ออบเจ็กต์ Iterator สามารถรีเซ็ตกลับไปเริ่มต้นใหม่ได้หรือไม่ใน Python?",
        options: ["โดยการเรียกเมธอด reset()", "โดยการสร้าง Iterator ใหม่จาก Iterable", "โดยการเรียก __iter__() ใหม่"],
        correctAnswer: 1,
    },
    {
        question: "เมื่อต้องการแปลง List เป็น Iterator ใน Python ต้องใช้ฟังก์ชันใด?",
        options: ["list()", "iter()", "next()"],
        correctAnswer: 1,
    },
    {
        question: "ออบเจ็กต์ใดที่เป็น Iterable แต่ไม่ใช่ Iterator ใน Python?",
        options: ["List", "File object", "Set"],
        correctAnswer: 0,
    },
    {
        question: "ข้อใดเป็นความจริงเกี่ยวกับ Iterator และ Generator ใน Python?",
        options: ["ทั้ง Iterator และ Generator เป็นประเภทของ Iterable", "Generator เป็นประเภทหนึ่งของ Iterator", "Generator สามารถใช้งานซ้ำได้เหมือน Iterator"],
        correctAnswer: 1,
    },
    {
        question: "การสร้างออบเจ็กต์ Iterable ใน Python ต้องทำอย่างไร?",
        options: ["โดยการกำหนด __iter__() และ __next__()", "โดยการกำหนด __iter__() เท่านั้น", "โดยการกำหนด __next__() เท่านั้น"],
        correctAnswer: 1,
    },
    {
        question: "เราสามารถสร้าง Iterator ที่วนลูปไม่สิ้นสุดได้ใน Python ด้วยวิธีใด?",
        options: ["โดยการใช้ฟังก์ชัน for loop", "โดยการใช้ฟังก์ชัน generator", "โดยการใช้โมดูล itertools"],
        correctAnswer: 1,
    },
    {
        question: "ฟังก์ชันใดใน Python ที่คืนค่า Iterator?",
        options: ["sorted()", "map()", "filter()"],
        correctAnswer: 1,
    },
    {
        question: "ข้อใดคือออบเจ็กต์ที่เป็น Iterable แต่ไม่ใช่ Iterator ใน Python?",
        options: ["List", "File object", "Set"],
        correctAnswer: 0,
    },
    {
        question: "ข้อใดเป็นความจริงเกี่ยวกับ Iterator และการใช้หน่วยความจำใน Python?",
        options: ["Iterator เก็บข้อมูลทั้งหมดในหน่วยความจำ", "Iterator สร้างข้อมูลทีละตัวและใช้หน่วยความจำน้อยกว่า", "Iterator สามารถวนลูปผ่านตัวเลขได้เท่านั้น"],
        correctAnswer: 1,
    },
    ],
  },

  {
    category: "HARD",
    questions: [
      {
        question: "วิธีการ __iter__() ในอ็อบเจ็กต์ที่เป็น Iterable ใช้เพื่ออะไร?",
        options: ["เพื่อคืนค่าอ็อบเจ็กต์ที่เป็น Iterator", "เพื่อสร้างสำเนาของ iterable", "เพื่อเพิ่มข้อมูลใน iterable"],
        correctAnswer: 0,
      },
      {
        question: "ในโปรโตคอลของ Iterator วิธีใดบ้างที่จำเป็นต้องมี?",
        options: ["__next__()", "__iter__()", "__getitem__()"],
        correctAnswer: 0,
      },
      {
        question: "ถ้ามีโค้ดดังนี้:\n\nfor i in range(3):\n    print(i)\nผลลัพธ์ที่ได้คืออะไร?",
        options: ["0 1 2", "0 1 2 3", "None"],
        correctAnswer: 0,
      },
      {
        question: "ข้อใดต่อไปนี้จะทำให้เกิดข้อผิดพลาด StopIteration?",
        options: ["การวนลูปไปเกินขอบเขตของ iterable", "การเรียก __next__() บนอ็อบเจ็กต์ที่เป็น Iterator ที่ว่างเปล่า", "ทั้งสองข้อ"],
        correctAnswer: 2,
      },
      {
        question: "ในการใช้ for loop กับอ็อบเจ็กต์ที่เป็น Iterable อ็อบเจ็กต์นั้นจำเป็นต้องมีเมธอดอะไร?",
        options: ["__next__()", "__iter__()", "__getitem__()"],
        correctAnswer: 1,
      },
      {
        question: "ประเภทข้อมูลใดที่เป็น Iterable โดยธรรมชาติ?",
        options: ["เซต (set)", "จำนวนเต็ม (int)", "จำนวนทศนิยม (float)"],
        correctAnswer: 0,
      },
      {
        question: "เมธอด __next__() คืนค่าผลลัพธ์อะไรเมื่อ Iterator หมดข้อมูล?",
        options: ["None", "สตริงว่าง", "เกิดข้อผิดพลาด StopIteration"],
        correctAnswer: 2,
      },
      {
        question: "ข้อใดต่อไปนี้ถูกต้องเกี่ยวกับความสัมพันธ์ระหว่าง Iterator และ Iterable?",
        options: ["Iterable คืออ็อบเจ็กต์ที่สามารถคืนค่า Iterator ได้", "Iterator คือชนิดย่อยของ Iterable", "Iterator และ Iterable คืออ็อบเจ็กต์เดียวกัน"],
        correctAnswer: 0,
      },
      {
        question: "ผลลัพธ์ของโค้ดนี้คืออะไร?\n\nlet iterable = [1, 2, 3]\nlet iterator = iterable[Symbol.iterator]()\nconsole.log(iterator.next())\nconsole.log(iterator.next())\nconsole.log(iterator.next())\nconsole.log(iterator.next())",
        options: ["{ value: 1, done: false }, { value: 2, done: false }, { value: 3, done: false }, { value: undefined, done: true }", "1 2 3 StopIteration", "1 2 3 undefined"],
        correctAnswer: 0,
      },
      {
        question: "หากคลาสหนึ่งมีเมธอด __iter__() แต่ไม่มีเมธอด __next__() สามารถใช้คลาสนี้เป็น Iterator ได้หรือไม่?",
        options: ["ได้ เพราะ __iter__() เพียงพอแล้ว", "ไม่ได้ เพราะจะเกิดข้อผิดพลาด", "ได้ แต่ต้องมีเมธอด __getitem__() แทน __next__()"],
        correctAnswer: 1,
      },
      {
        question: "สถานะของ Iterator คืออะไร?",
        options: ["Iterator สามารถรีเซ็ตให้กลับไปที่จุดเริ่มต้นได้", "สถานะของ Iterator ถูกเก็บไว้ภายใน", "สถานะของ Iterator ใช้ร่วมกันระหว่างทุก Iterator"],
        correctAnswer: 1,
      },
      {
        question: "ผลลัพธ์ของโค้ดนี้คืออะไร?\n\nclass MyIterator {\n    constructor() {\n        this.index = 0;\n        this.data = [1, 2, 3];\n    }\n    next() {\n        if (this.index < this.data.length) {\n            return { value: this.data[this.index++], done: false };\n        } else {\n            return { value: undefined, done: true };\n        }\n    }\n}\nlet it = new MyIterator();\nconsole.log(it.next())\nconsole.log(it.next())\nconsole.log(it.next())\nconsole.log(it.next())",
        options: ["{ value: 1, done: false }, { value: 2, done: false }, { value: 3, done: false }, { value: undefined, done: true }", "1 2 3 StopIteration", "Error: next is not a function"],
        correctAnswer: 0,
      },
      {
        question: "เมื่อใช้ Generator Function เป็น Iterator จะมีลักษณะการทำงานอย่างไร?",
        options: ["มันจะรันโค้ดทั้งหมดในครั้งเดียว", "มันจะ yield ค่าทีละตัวและเก็บสถานะของการทำงานไว้", "มันจะทำงานไม่สิ้นสุด"],
        correctAnswer: 1,
      },
      {
        question: "วิธีที่ถูกต้องในการแปลง List ให้เป็น Iterator ใน Python คืออะไร?",
        options: ["iter(list)", "list(iter)", "list.__iter__()"],
        correctAnswer: 0,
      },
      {
        question: "วิธีการตรวจสอบว่าอ็อบเจ็กต์เป็น Iterator ใน Python คืออะไร?",
        options: ["ใช้ isinstance(obj, Iterator)", "ใช้ isinstance(obj, Iterable)", "ใช้ isinstance(obj, list)"],
        correctAnswer: 0,
      },
      {
        question: "ผลลัพธ์ของโค้ดนี้คืออะไร?\n\nlet arr = [1, 2, 3]\nfor (let i = 0; i < arr.length; i++) {\n  arr[i] = arr[i] + 1;\n}\nfor (let item of arr) { console.log(item); }",
        options: ["1 2 3", "2 3 4", "Error: array modified during iteration"],
        correctAnswer: 1,
      },
      {
        question: "เมื่อใช้ฟังก์ชัน zip() กับ Iterator จะเกิดอะไรขึ้น?",
        options: ["มันจะดึงข้อมูลจาก Iterator จนหมด", "มันจะเกิดข้อผิดพลาดถ้า Iterator ยาวไม่เท่ากัน", "มันจะคืนค่ารายการของ tuple"],
        correctAnswer: 0,
      },
      {
        question: "เมื่อใช้ next() กับ Iterator หลายๆ ครั้งจนหมด จะเกิดอะไรขึ้น?",
        options: ["มันจะคืนค่าของอิลิเมนต์สุดท้ายต่อไป", "มันจะเกิดข้อผิดพลาด StopIteration", "มันจะคืนค่า None หลังจากหมดข้อมูลแล้ว"],
        correctAnswer: 1,
      },
      {
        question: "ในกรณีที่ Iterator หมดข้อมูล การจัดการกับข้อผิดพลาด StopIteration ควรทำอย่างไร?",
        options: ["โดยการใช้ try-except block", "จะจัดการโดยอัตโนมัติใน for loop", "โดยการใช้ while loop แทน for loop"],
        correctAnswer: 1,
      },
      {
        question: "วิธีใดที่ถูกต้องในการใช้ for loop กับอ็อบเจ็กต์ที่เป็น Iterable?",
        options: ["ใช้ __next__()", "ใช้ __iter__()", "ใช้ __getitem__()"],
        correctAnswer: 1,
      },
      {
        question: "ความแตกต่างระหว่าง __iter__() และ __next__() คืออะไร?",
        options: ["__iter__() สร้าง Iterator ใหม่, __next__() คืนค่าของอิลิเมนต์ถัดไป", "__next__() สร้าง Iterator ใหม่, __iter__() คืนค่าของอิลิเมนต์ถัดไป", "ไม่มีความแตกต่าง, ทำงานเหมือนกัน"],
        correctAnswer: 0,
      },
      {
        question: "ข้อใดจะทำให้เกิดลูปไม่สิ้นสุด?",
        options: ["Iterator ที่คืนค่าอิลิเมนต์ต่อเนื่องไปเรื่อยๆ", "Iterator ของ List", "Iterator ของ Dictionary"],
        correctAnswer: 0,
      },
      {
        question: "ถ้าเรียก next() บน Iterator สองครั้งติดต่อกัน ผลลัพธ์จะเป็นอย่างไร?",
        options: ["การเรียกครั้งที่สองจะคืนค่าของอิลิเมนต์ที่สอง", "การเรียกครั้งที่สองจะคืนค่าของอิลิเมนต์แรกอีกครั้ง", "การเรียกครั้งที่สองจะเกิดข้อผิดพลาด StopIteration ถ้ามันหมดแล้ว"],
        correctAnswer: 2,
      },
    ],
  },

];
