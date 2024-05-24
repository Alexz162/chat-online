import { Channel, useChatContext } from "stream-chat-react";

//import { ChannelInner, CreateChannel, EditChannel, TeamMessage } from './';

export default function ChannelContainer({
  isCreating,
  isEditing,
  setIsCreating,
  setIsEditing,
  createType,
}) {
  const { channel } = useChatContext();
  if (isCreating) {
    return (
      <div className="channel__container">
        <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>
    );
  }
  if (isEditing) {
    return <EditChannel />;
  }

  return <div>ChannelContainer</div>;
}
