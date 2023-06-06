var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.json([
    {
      data_source_title: "CVC data (historic)",
      data_detail: "Contains historical CVC data from all insertions on ICU across 3 sites",
      field_names: ['id', 'site', 'insertion']
    },
    {
      data_source_title: "Current admissions",
      data_detail: "Currently admitted patients on ICU across 3 sites",
      field_names: ['id', 'site', 'level', 'admission_date', 'specialty']
    },


  ])

});



module.exports = router;
