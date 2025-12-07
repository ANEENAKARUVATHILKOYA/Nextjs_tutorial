import {Card} from "../../components/card";
import Link from "next/link";

export default function notification(){
    return(
        <Card>
            <div>notification</div>
            <Link href="/complex-dashboard/archived">Archived</Link>
            </Card>
    )
}