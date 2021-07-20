function sortTable(table_id, column_id, asc_desc) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById(table_id);
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[column_id];
        y = rows[i + 1].getElementsByTagName("TD")[column_id];
        if (asc_desc==="desc" && parseInt(x.innerHTML.replace(",","")) < parseInt(y.innerHTML.replace(",",""))) {
          shouldSwitch = true;
          break;
        } else if (asc_desc==="asc" && parseInt(x.innerHTML.replace(",","")) > parseInt(y.innerHTML.replace(",",""))) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
  
  console.time('descSortTable')
  sortTable("mapping_count_table", 1,"desc");
  console.timeEnd('descSortTable')