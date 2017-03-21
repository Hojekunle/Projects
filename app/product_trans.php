<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Eloquent;

class ProductTransaction extends Model
{
    protected $table = 'prod_trans';
    public $timestamps = true;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = array('id', 'account_id', 'user_id', 'created_at','updated_at');

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

     public function accounts(){
        return $this->hasMany('App\account');
    }

    public function users(){
        return $this->hasMany('App\user');
    }
}
