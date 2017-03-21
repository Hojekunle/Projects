<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Eloquent;

class Product extends Model
{
    protected $table = "products";

    //protected $fillable = array('id', 'title', 'description', 'account_id', 'created_at','updated_at');

    protected $fillable = array('id', 'name', 'description','client_id', 'created_at','updated_at');
    public $timestamps = true;
    
    public function accounts(){
        return $this->BelongsTo('App\account');
    }

    public function clients(){
        return $this->BelongsTo('App\client');
    }
    
}
