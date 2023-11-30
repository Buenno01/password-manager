import { faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ValidationItemProps = {
  status: boolean,
  description: string,
};

function ValidationItem({ description, status }:ValidationItemProps) {
  function setColor(isOk: boolean) {
    const danger = 'text-red-500';
    const success = 'text-green-500';
    return (isOk ? success : danger);
  }
  return (
    <p
      className={ `flex gap-2 items-center ${setColor(status)}` }
    >
      <FontAwesomeIcon icon={ status ? faCircleCheck : faCircleExclamation } />
      {description}
    </p>
  );
}

export default ValidationItem;
