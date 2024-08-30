import{s as t}from"./index-CPewfpP0.js";async function c(r){const{data:o,error:e}=await t.from("Orders").insert([{address:r.address,status:"inProgress",user_id:r.userId,fullname:r.fullname,phone:r.phone,total_price:r.totalPrice}]).select();if(e)throw console.error("Error placing order:",e),new Error("Could not place the order");const s=o[0].id,i=r.items.map(a=>({item_id:a.id,order_id:s,quantity:a.quantity}));console.log(i);const{data:d,error:n}=await t.from("Order_Items").insert(i);if(n)throw console.error("Error linking order items:",n),await t.from("Orders").delete().eq("id",s),new Error("Could not link order items");return{order:o,items:d}}async function m(r){const{data:o,error:e}=await t.from("Orders").select(`
            id,
            address,
            status,
            fullname,
            phone,
            total_price,
            Order_Items (
                order_id,
                quantity,
                item_id,
                Items (
                    id,
                    name,
                    description
                )
            )
        `).eq("user_id",r);return e?(console.error("Error fetching orders:",e),[]):o}export{m as g,c as p};
