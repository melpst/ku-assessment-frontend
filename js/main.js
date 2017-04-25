var app = new Vue({
  el: '#app',
  data: {
  	logo: 'https://upload.wikimedia.org/wikipedia/th/thumb/e/e2/Logo_KU_eng_color.jpg/200px-Logo_KU_eng_color.jpg',
  	webName: 'KU Assessment',
    subjectIdLabel: 'รหัสวิชา',
    orderHeaderLabel: 'ข้อที่',
    infoHeaderLabel: 'รายละเอียดคำถาม',
    levelHeaderLabel: 'ระดับความเหมาะสม',
    levelsLabel: ['มากที่สุด', 'มาก', 'พอใช้', 'น้อย', 'น้อยที่สุด'],
    infosLabel: ['ลักษณะของอาจารย์ เช่น การใช้คำพูด บุคลิกท่าทาง ความรับผิดชอบในการสอน การเป็นแบบอย่างที่ดรแก่นิสิต', 'อาจารย์ฝึกให้นิสิตได้คิดวิเคราะห์ คิดแก้ปัญหา คิดสร้างสรรค์', 'อาจารย์จัดกิจกรรมการเรียนการสอนที่นิสิตได้มีโอกาสแลปเปลี่ยนเรียนรู้กับผู้อื่น', 'อาจารย์จัดกิจกรรมการเรียนการสอนที่มีการส่งเสริมให้นิสิตได้เรียนรู้ด้วยตนเองโดยใช้ทั้งแหล่งการเรียนรู้ หรือเทคโนโลยีสารสนเทศต่างๆ'],
    submitLabel: 'Submit',
    cancelLabel: 'Cancel',
    logoutLabel: 'Logout',
    subjectId: '01204352',
    sectionId: '1',
    subjectName: 'Laws & Ethics in Information Technology',
    radioButtonsName: ['great','good','fair','bad','worst']
  },
  methods:{
    submitAssess: function(argument) {
      // body...
    }
  }
})