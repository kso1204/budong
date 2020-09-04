<?php

namespace App\Http\Controllers;

use App\Register;
use Illuminate\Http\Request;

class SpaController extends Controller
{
    //
    public function index(){
        return view('welcome');
    }

    public function submit(Request $request){

        $rules = [
            'name' => 'required|string',
            'email' => 'required|email|unique:registers',
            'mobile' => 'required|string',
            'zone' => 'required|string',
            'address' => 'required|string',
            'likeType' => 'required',
        ];

        $messages = [
            'required' => ':attribute 필수 입니다.',
            'unique' => ':attribute은 이미 등록되었습니다.',
        ];

        $customAttributes = [
            'name' => '이름',
            'email' => '이메일',
            'mobile' => '연락처',
            'zone' => '우편번호',
            'address' => '주소',
            'likeType' => '선호사항',
        ];

        $this->validate($request, $rules, $messages, $customAttributes);

        
        
        /*
          Add mail functionality here.
        */

        return Register::create($request->all());
    }

    public function get(){
        return Register::orderBy('id','desc')->get();
    }
}
