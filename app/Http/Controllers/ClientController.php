<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Client;

class ClientController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
      
        $input = $request->all();
        $clients=client::query();
        Log::info('calling client index...');
        if($request->get('search')){
            $clients = $clients->where("name", "LIKE", "%{$request->get('search')}%");
        }
		  $clients = $clients->paginate(5);
        
        return response($clients);
    }

    public function getClients(Request $request)
    {
      
        $input = $request->all();
        $search_term = $request->input('search');
        $limit = $request->input('limit')?$request->input('limit'):3;
        $clients=client::query();
        Log::info('calling get clients ...');
        if($search_term){
            $clients = $clients->where("name", "LIKE", "%$search_term%")->with(
            ['products'=>function($query){
                $query->orderBy('name');                
            }]
            );
        
		  $clients = $clients->paginate($limit);

          $clients->appends(array(            
            'search' => $search_term,
                'limit' => $limit
                 ));
        }
        else
        {
            $clients = client::query();
            $clients = $clients->with(
            ['products'=>function($query){
                $query->orderBy('name');                
            }]
            )->paginate($limit);

            $clients->appends(array(
                'limit' => $limit
          ));
        }

        return response($clients);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(Request $request)
    {
    	$input = $request->all();
        $create = client::create($input);
        return response($create);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        $client = client::find($id);
        return response($client);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request,$id)
    {
    	$input = $request->all();

        $client=client::find($id);
        $client->update($input);
        $client=client::find($id);
        return response($client);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        return client::where('id',$id)->delete();
    }
}
