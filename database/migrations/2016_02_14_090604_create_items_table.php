<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->bigincrements('id');
            $table->string('code');
            $table->text('description');
            $table->timestamps();
        });

        Schema::create('clients', function (Blueprint $table) {
            $table->bigincrements('id');
            $table->string('name');
            $table->text('email');
            $table->text('questionno');
            $table->timestamps();
        });

         Schema::create('products', function (Blueprint $table) {
            $table->bigincrements('id');
            $table->string('name');            
            $table->text('description');
            
            $table->biginteger('user_id');
            $table->timestamps();
        });

        Schema::create('users', function(Blueprint $table)
            {
                $table->bigincrements('id');

                $table->string('code', 32);
                $table->string('username', 32);
                $table->string('email', 320);
                $table->string('password', 64);
                $table->biginteger('client_id');
                $table->biginteger('role_id');
                // required for Laravel 4.1.26
                $table->string('remember_token', 100)->nullable();
                $table->timestamps();
            });

       Schema::create('prod_trans', function (Blueprint $table) 
            {
                $table->bigincrements('id');
                $table->string('account_id');
                $table->text('user_id');
                $table->timestamps();
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        
        Schema::drop("products");        
        Schema::drop("accounts");
        Schema::drop("users");
        Schema::drop("prod_trans");
    }
}