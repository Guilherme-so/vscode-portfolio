import Image from "next/image";
import { useRouter } from "next/router";
import { TabContainer } from "./styles";
import { useDispatch } from "react-redux";
import { deleteFile } from "../../redux/features/files/filesSlice";

type ITab = {
  id: number;
  icon: any;
  filename: string;
  path: string;
};

const Tab = ({ id, icon, filename, path }: ITab) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isActive = router.pathname == path ? true : false;

  return (
    <TabContainer active={isActive} onClick={() => router.push(path)}>
      <Image src={icon} alt={filename} height={18} width={18} />
      <p>{filename}</p>
      <span
        onClick={(e) => {
          e.stopPropagation();
          dispatch(deleteFile(id));
        }}
      >
        X
      </span>
    </TabContainer>
  );
};

export default Tab;
