import CitiesWrap from "../../CitiesWrap/CitiesWrap";
import Table from "../../components/UI/Table/Table";
import { transformData } from "../../helpers/transform-data";
import { CITIES_MOCK } from "../../mock/cities.mock";
import { shapeOfCities } from "../../shared/shape/shape-of-cities";

const Cities = () => {
  const { head, body } = transformData<any, any, any>(
    CITIES_MOCK,
    shapeOfCities
  );

  return (
    <CitiesWrap>
      <Table
        selectedItems={body}
        heading={head}
        tableData={body}
        idName={"id"}
        hasCheckbox={false}
        canBeDeleted={true}
      />
    </CitiesWrap>
  );
};

export default Cities;
