import $ from 'jquery';

class Interface{
  /**
   * [getOmit get the missed numbers]
   * @param  {string} issue [currently term number]
   * @return {[type]}       [description]
   */
  getOmit(issue){
    let self=this;
    return new Promise((resolve,reject)=>{
      $.ajax({
        url:'/get/omit',
        data:{
          issue:issue
        },
        dataType:'json',
        success:function(res){
          self.setOmit(res.data);
          resolve.call(self,res)
        },
        error:function(err){
          reject.call(err);
        }
      })
    });
  }
  /**
   * [getOpenCode the win number]
   * @param  {string} issue [term number]
   * @return {[type]}       [description]
   */
  getOpenCode(issue){
    let self=this;
    return new Promise((resolve,rejet)=>{
      $.ajax({
        url:'/get/opencode',
        data:{
          issue:issue
        },
        dataType:'json',
        success:function(res){
          self.setOpenCode(res.data);
          resolve.call(self,res);
        },
        error:function(err){
          reject.call(err);
        }
      })
    });
  }

  /**
   * [getState currently state]
   * @param  {string} issue [currently draw]
   * @return {[type]}       [description]
   */
  getState(issue){
    let self=this;
    return new Promise((resolve,rejet)=>{
      $.ajax({
        url:'/get/state',
        data:{
          issue:issue
        },
        dataType:'json',
        success:function(res){
          resolve.call(self,res);
        },
        error:function(err){
          reject.call(err);
        }
      })
    });
  }
}

export default Interface
