
export default async function product({params}){

    const {id} = await params;

    return (<div>
        hiii
        {id}
    </div>)
}