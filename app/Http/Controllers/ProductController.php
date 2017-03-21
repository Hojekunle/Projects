<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Product;

class ProductController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
      
       $input = $request->all();
       $limit = $request->input('limit')?$request->input('limit'):3;
        $products=Product::query();
        Log::info('calling product index...');
        if($request->get('search')){
            $products = $products->where("name", "LIKE", "%{$request->get('search')}%");
        }
		  $products = $products->paginate($limit);
        
        return response($products);
        //return Response::json($products);
    }

    public function getProducts(Request $request)
    {
      
        $input = $request->all();
        $search_term = $request->input('search');
        $limit = $request->input('limit')?$request->input('limit'):3;
        $products=Product::query();
        Log::info('calling getproductsOptions...');
        if($search_term){
            $products = $products->where("name", "LIKE", "%$search_term%");
        
		  $products = $products->paginate($limit);

          $products->appends(array(            
            'search' => $search_term,
                'limit' => $limit
                 ));
        }
        else
        {
            $products = Product::query();
            $products = $products->paginate($limit);

            $products->appends(array(
                'limit' => $limit
          ));
        }

        return response($products);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(Request $request)
    {
    	$input = $request->all();
        $create = Product::create($input);
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
        $product = Product::find($id);
        return response($product);
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

        $product=Product::find($id);
        $product->update($input);
        $product=Product::find($id);
        return response($product);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        return Product::where('id',$id)->delete();
    }
}
