import supabase from './supabase'

export async function getItemById(id) {
    const { data, error } = await supabase
        .from('Items')
        .select(
            'id,name,category,price,photos,description,available,quantity,specifications,customer_reviews,warranty_return_policy,delivery_information,brand_information,related_accessories,variants'
        )
        .eq('id', id)

    if (error) {
        console.log(error)
        throw new Error('Could not load items')
    }

    return data[0]
}

export async function getItemsByStatus(status) {
    const { data, error } = await supabase
        .from('Items')
        .select('id,name,category,price,photos,description')
        .eq('status', status)

    if (error) {
        console.log(error)
        throw new Error('Could not load items')
    }

    return data
}

export async function getItemsByCategory(category) {
    if (category === 'all') {
        const { data, error } = await supabase
            .from('Items')
            .select('id,name,category,price,photos,description')

        if (error) {
            console.log(error)
            throw new Error('Could not load items')
        }

        return data
    } else {
        const { data, error } = await supabase
            .from('Items')
            .select('id,name,category,price,photos,description')
            .eq(
                'category',
                category.charAt(0).toUpperCase() + category.slice(1)
            )

        if (error) {
            console.log(error)
            throw new Error('Could not load items')
        }

        return data
    }
}
