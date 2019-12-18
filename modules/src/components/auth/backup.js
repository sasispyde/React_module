// File Upload Component

import React from 'react';
import axios from '../../axios';

class Register extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			formFields : {},
			auth : false,
			error:''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInput  = this.handleInput.bind(this);
	}

	async handleSubmit(event) {

		event.preventDefault();

		const data = new FormData(); 
    	data.append('file', this.state.formFields)
	
		await axios.post('/upload',data,{header:{'Content-Type': 'application/json'}}).then((responce)=>{
			if(responce.data.status !== 0) {
				this.setState({
					formFields:{},
					error:''
				})			
			} else {
				this.setState({ 
					error:responce.data.error 
				})
			}
		}).catch((err)=> {this.setState({ error: "Server Error" })})
	}

	handleInput(event) {
		this.setState({
			formFields:event.target.files[0]
		})
	} 

	render(){
		return (
			<div style={{marginTop:"20px",padding:"10px",width:"50%",textAlign:"center",verticalAlign:"middle"}} >
				<center style={{color:"green"}}>Register</center>
				<form  onSubmit={this.handleSubmit}>
					<input type="file" name="image_file" title="Upload Image" onChange={this.handleInput} />
					<p style={{color:"red"}} >{this.state.error}</p>
					<br />
					<input type="submit" value='submit' className='btn btn-success' />
				</form>
			</div>
		);
	}
}

export default Register;


// leetcode backup code...


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(str, needle) {
  if(needle.length<=0){
    return 0;
  } else if(str.length<=0){
    return -1
  }
  var index=0;
  var count_all_index = 0;
  var needle_char = needle.split(""); 
  for(var i = 0;i<str.length;i++){
    index = i;
    if(count_all_index<needle_char.length){
        if(str[i]==needle_char[0]){
          for(var j=0;j<needle_char.length;j++){
          if(str[index] == needle_char[j]){
            index++;
            count_all_index++;
            if(count_all_index==needle_char.length){
              return i;
            }
          } else {
            count_all_index = 0;
            j=needle_char.length;
          }
        }
      }
    }
  }
  return count_all_index == needle_char.length ? i : -1;
};



// local solution

function getindex(str , needle){
  if(needle.length<=0){
    return 0;
  } else if(str.length<=0){
    return -1
  }
  var lastIndex = str.length-(needle.length-1);
  for(let i = 0;i<lastIndex;i++){
    let dos = false;
    for(let j=0;j<needle.length;j++){
      if(str[i+j] !== needle[j]){
        dos = true;
        break;
      }
    }
    if(!dos){
      return i;
    }
  }
  return -1
}

var strStr = function(str, needle) {
  if(needle.length<=0){
    return 0;
  }
  if(str.length<=0){
    return -1
  }
  for(let i = 0;i<str.length;i++){
      let dos = true;
   for(let j=0;j<needle.length;j++){
     if(str[i+j]!==needle[j]){
       dos = false;
       break;
     }
   }
   if(dos){
     return i;
   }
  }
  return -1;
};


// Valid paranthesis

var isValid = function(s) {
    var stack = [];
    let map = {
        '(':')',
        '{':'}',
        '[':']'
    }
    for(let i=0;i<s.length;i++){
        if(s[i]=='(' || s[i]=='{' || s[i]=='['){
            stack.push(s[i])
        } else {
            if(s[i]!=map[stack.pop()]) { return false };
        }
    }
    if(stack.length != 0){ return false }
    return true;
};

// search the position to insert the elememt 
// optimised
var searchInsert = function(nums, target) {
    for(let i=0;i<nums.length;i++){
      if(nums[i]===target || target < nums[i]){
        return i;
      }
    }
    return nums.length;
};

console.log(searchInsert([1,3,5,6],7));

// My Solution (above Search problem)

var searchInsert = function(nums, target) {
    var n = nums.indexOf(target);
    if(n==-1){
      for(let i=0;i<nums.length;i++){
        if(nums[nums.length-1]>target){
          if(nums[0]>target) {
            return 0
          } else{
             if(nums[i]<target && nums[i+1]>target){
              return i+1;
            }
          }
         
        } else {
          return nums.length;
        }
      }
    }
  return n;
};

// Reverse Linked List

function Node(data, next) {
  this.data = data;
  this.next = next;
}

function merge(head) {
    if (!head) return null;
    var previous = null;
    while(head != null){
      next = head.next;
      head.next = previous;
      previous = head;
      head = next
    }
  return previous;
}

var n7 = new Node(7, null);
var n6 = new Node(4, n7);
var n5 = new Node(6, n6);
var n4 = new Node(5, n5);
var n3 = new Node(3, n4);
var n2 = new Node(1, n3);
var n1 = new Node(2, n2);
var L1 = n1;
console.log(merge(L1));

// Remove Duplicate from linked list

function merge(current) {
  if (!current) return null;
    head = current;
    while(head != null && head.next != null){
      if(head.data==head.next.data) {
        head.next = head.next.next;
      } else {
        head = head.next;
      }
  }
  return current;
}
// Final solution
var deleteDuplicates = function(current) {
  if (!current) return null;
  let head = current;
  while(head!=null && head.next != null){
    if(head.val==head.next.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }
  return current;
};

// Happy Number

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n == 0) {
        return false;
    }
    try {
        let num_array = n.toString().split("");
        if (num_array.length == 1 && num_array[0] == 1) {
            return true;
        } else {
            var total = 0;
            for (var i = 0; i < num_array.length; i++) {
                total = total + (parseInt(num_array[i]) * parseInt(num_array[i]));
            }
            return isHappy(total);
        }
    } catch {
        return false;
    }
};

var isHappy = function(n) {
  let slow = n;
  let fast = getNextHappyNumber(n);
  while(slow !== fast) {
    slow = getNextHappyNumber(slow);
    fast = getNextHappyNumber(getNextHappyNumber(fast));
  }
  return slow === 1;
  function getNextHappyNumber(n) {
    let tmp = n;
    let res = 0;
    while(tmp > 0) {
      res += Math.pow(tmp % 10, 2);
      tmp = Math.floor(tmp / 10);
    }
    return res;
  }
};

var isHappy = function(n) {
    if (n == 0) {
        return false;
    }
    try {
        if (n==1) {
            return true;
        } else {
            var total = 0;
            while(n>0){
              total += Math.pow(n % 10, 2);
              n = Math.floor(n / 10);
            }
            return isHappy(total);
        }
    } catch {
        return false;
    }
};

// Intersect Linked List 
  	while (headA) {
        headA.hasBeenVisited = true
        headA = headA.next
    }
    while (headB) {
        if (headB.hasBeenVisited) return headB
        headB = headB.next
    }
// Different One;
var getIntersectionNode = function(headA, headB) {
    let temp = headA;
    let lengthA = 0;
    let lengthB = 0;
    let diff = 0;
    while (temp) {
        lengthA ++;
        temp = temp.next;
    }
    temp = headB;
    while (temp) {
        lengthB ++;
        temp = temp.next;
    }
    let tempA = headA;
    let tempB = headB;
    if (lengthA > lengthB) {
        diff = lengthA - lengthB;
        while (diff !== 0) {
            tempA = tempA.next;
            diff --;
        }
    } else {
        diff = lengthB - lengthA;
        while (diff !== 0) {
            tempB = tempB.next;
            diff --;
        }
    }
    while (tempB && tempA) {
        if (tempA === tempB) {
            return tempA;
        }
        tempA = tempA.next;
        tempB = tempB.next;
    }
    return null;
};

// Remove elements in linked list 
    if(head == null) return null;
    if(val == 'undefined') return null;
    var list = { val : -1 , next : null }
    var p = list;
    var len = 0;
    while(head != null){
        len++;
        if(head.val == val){
            len--;
            if(head.next!=null){
                p.next = head.next;
            } else{
                p.next = null;
            }
        } else {
            p.next = head;
        }
        head = head.next;
        p = p.next;
    }
    if(len == 0 && list.next!= null){
      if(list.next.val == val) {
        list.next = null;
        return list.next;
      } else {
        return list.next;
      }
    } else {
      return list.next;
    }

// My Leetcode Solution
    if(head == null) return null;
    if(val == '') return null;
    var list = { val : -1 , next : null }
    var p = list;
    var len = 0;
    var e = new Array();
    while(head != null){
        len++;
        if(head.val == val){
            len--;
            if(head.next!=null){
                p.next = head.next;
                head = head.next;
            } else{
                p.next = null;
            }
        } else {
            p.next = head;
        }
        p = p.next;
        head = head.next;
    }
    if(len == 0 && list.next!= null){
      if(list.next.val == val) {
        list.next = null;
        return list.next;
      } else {
        return list.next;
      }
    } else {
      return list.next;
    }

// Final Solution 

var removeElements = function(head, element) {
    var current = head; 
    while (current != null && current.next!=null) { 
        if (current.val == element) {
            current = current.next;
            head = current;
        } else if (current.next.val == element) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    if (current != null  && current.val == element) {
        current = current.next;
        head = current;
    }
    return head;
};