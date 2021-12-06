var sqlMap = {
    // 用户
    user: {
      add:'INSERT INTO member_table(phone,name,age,sex) VALUES(?,?,?,?)',
      search: 'SELECT * FROM member_table',
      delete:'DELETE FROM member_table where'
    }
  }
  
module.exports = sqlMap;
