<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Eloquent;

class Account extends Model
{
    protected $table = 'accounts';
    public $timestamps = true;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = array('id', 'code', 'description', 'client_id', 'created_at','updated_at');

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

     public function products(){
        return $this->hasMany('App\product');
    }
    public function ProductTransactions(){
        return $this->BelongsTo('App\ProductTransaction');
    }
}
