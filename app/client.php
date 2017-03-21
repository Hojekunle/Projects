<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Eloquent;

class client extends Model
{

    protected $table = 'clients';
    //seed all data to db at once
    protected $fillable = array('id', 'name', 'email','created_at','updated_at');

    public function products(){
        return $this->hasMany('App\product');
    }


    
}

